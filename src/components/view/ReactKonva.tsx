import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image, Line, Text } from "react-konva";
import Konva from "konva";
import html2canvas from "html2canvas";

const DrawImage: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tool, setTool] = useState<"pen" | "text" | "eraser">("pen");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lines, setLines] = useState<any[]>([]);
  const [texts, setTexts] = useState<any[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("black");
  const [textSize, setTextSize] = useState<number>(20);
  const [penSize, setPenSize] = useState<number>(5);
  const [eraserSize, setEraserSize] = useState<number>(10);
  const [currentSize, setCurrentSize] = useState<number>(5);
  const [penColor, setPenColor] = useState<string>("black"); // Track pen color
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [undoStack, setUndoStack] = useState<{ lines: any[]; texts: any[] }[]>(
    []
  );
  const [redoStack, setRedoStack] = useState<{ lines: any[]; texts: any[] }[]>(
    []
  );
  const stageRef = useRef<Konva.Stage>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://s3.ap-southeast-1.amazonaws.com/assets.nuktasolutions.com/images/employ%20card.png-1719746321030.png";
    img.onload = () => setImage(img);
  }, []);

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (tool === "pen" || tool === "eraser") {
      setIsDrawing(true);
      const pos = stageRef.current?.getPointerPosition();
      if (pos) {
        setLines([
          ...lines,
          { points: [pos.x, pos.y], tool, color: penColor, size: currentSize },
        ]);
      }
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if ((tool === "pen" || tool === "eraser") && isDrawing) {
      const pos = stageRef.current?.getPointerPosition();
      if (pos) {
        const newLines = [...lines];
        const lastLine = newLines[newLines.length - 1];
        lastLine.points = lastLine.points.concat([pos.x, pos.y]);
        setLines(newLines);
      }
    }
  };

  const handleMouseUp = () => {
    if (tool === "pen" || tool === "eraser") {
      setIsDrawing(false);
      // Save current state to undo stack
      setUndoStack([...undoStack, { lines, texts }]);
      // Clear redo stack
      setRedoStack([]);
    }
  };

  const handleAddText = () => {
    if (currentText.trim() !== "") {
      setTexts([
        ...texts,
        { text: currentText, x: 50, y: 50, color: textColor, size: textSize },
      ]);
      setCurrentText("");
      // Save current state to undo stack
      setUndoStack([...undoStack, { lines, texts }]);
      // Clear redo stack
      setRedoStack([]);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleTextSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextSize(Number(e.target.value));
  };

  const handlePenSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPenSize(Number(e.target.value));
    setCurrentSize(Number(e.target.value));
  };

  const handleEraserSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEraserSize(Number(e.target.value));
    setCurrentSize(Number(e.target.value));
  };

  const handlePenColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPenColor(e.target.value);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastState = undoStack[undoStack.length - 1];
      setRedoStack([...redoStack, { lines, texts }]);
      setLines(lastState.lines);
      setTexts(lastState.texts);
      setUndoStack(undoStack.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastState = redoStack[redoStack.length - 1];
      setUndoStack([...undoStack, { lines, texts }]);
      setLines(lastState.lines);
      setTexts(lastState.texts);
      setRedoStack(redoStack.slice(0, -1));
    }
  };

  const handleDownload = () => {
    const uri = stageRef.current?.toDataURL();
    if (uri) {
      const link = document.createElement("a");
      link.href = uri;
      link.download = "drawing.png";
      link.click();
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setTool("pen")}>Pen</button>
        <button onClick={() => setTool("text")}>Text</button>
        <button onClick={() => setTool("eraser")}>Eraser</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <button onClick={handleDownload}>Download</button>
        {tool === "text" && (
          <div>
            <input
              type="text"
              value={currentText}
              onChange={handleTextChange}
            />
            <input
              type="color"
              value={textColor}
              onChange={handleTextColorChange}
            />
            <select onChange={handleTextSizeChange} value={textSize}>
              <option value={12}>12px</option>
              <option value={16}>16px</option>
              <option value={20}>20px</option>
              <option value={24}>24px</option>
              <option value={30}>30px</option>
            </select>
            <button onClick={handleAddText}>Add Text</button>
          </div>
        )}
        {tool === "pen" && (
          <div>
            <input
              type="color"
              value={penColor}
              onChange={handlePenColorChange}
            />
            <select onChange={handlePenSizeChange} value={penSize}>
              <option value={2}>2px</option>
              <option value={5}>5px</option>
              <option value={10}>10px</option>
              <option value={15}>15px</option>
            </select>
          </div>
        )}
        {tool === "eraser" && (
          <div>
            <select onChange={handleEraserSizeChange} value={eraserSize}>
              <option value={5}>5px</option>
              <option value={10}>10px</option>
              <option value={15}>15px</option>
              <option value={20}>20px</option>
            </select>
          </div>
        )}
      </div>
      <Stage
        width={500}
        height={500}
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {image && <Image image={image} width={500} height={500} />}
          {lines.map((line, index) => (
            <Line
              key={index}
              points={line.points}
              stroke={line.tool === "eraser" ? "white" : line.color}
              strokeWidth={line.size}
              lineCap="round"
              lineJoin="round"
            />
          ))}
          {texts.map((text, index) => (
            <Text
              key={index}
              text={text.text}
              x={text.x}
              y={text.y}
              fontSize={text.size}
              fill={text.color}
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawImage;
