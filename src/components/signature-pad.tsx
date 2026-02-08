"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

interface SignaturePadProps {
    onSave: (signature: string) => void;
}

export function SignaturePad({ onSave }: SignaturePadProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = React.useState(false);

    const getCoords = (event: React.MouseEvent | React.TouchEvent): [number, number] => {
        if (!canvasRef.current) return [0, 0];
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        if (event.nativeEvent instanceof MouseEvent) {
          return [event.nativeEvent.clientX - rect.left, event.nativeEvent.clientY - rect.top];
        }
        if (event.nativeEvent instanceof TouchEvent) {
          return [event.nativeEvent.touches[0].clientX - rect.left, event.nativeEvent.touches[0].clientY - rect.top];
        }
        return [0,0];
      };

    const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const [x, y] = getCoords(event);
        ctx.beginPath();
        ctx.moveTo(x, y);
        setIsDrawing(true);
    };

    const draw = (event: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const [x, y] = getCoords(event);
        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleSave = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dataUrl = canvas.toDataURL();
        onSave(dataUrl);
    };

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Set styles for drawing
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <canvas
                ref={canvasRef}
                width={500}
                height={200}
                className="bg-muted rounded-md cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            />
            <div className="flex justify-between">
                <Button variant="outline" onClick={clearCanvas}>Clear</Button>
                <DialogClose asChild>
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">Save Signature</Button>
                </DialogClose>
            </div>
        </div>
    );
}
