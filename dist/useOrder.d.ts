import React from 'react';
interface IResult<T> {
    isGrabbing: boolean;
    isHover: boolean;
    elementStyle: React.HTMLAttributes<T>['style'];
    mouseDown: (e: React.MouseEvent<HTMLElement>) => void;
    mouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    touchStart: (e: React.TouchEvent<HTMLElement>) => void;
    touchMove: (e: React.TouchEvent<HTMLElement>) => void;
}
interface IProps<T> {
    onMove: (i: number) => void;
    index: number;
    elementRef: React.MutableRefObject<T>;
    wrapperRef: React.MutableRefObject<HTMLElement>;
}
export default function useOrder<T extends HTMLElement>({ elementRef: ref, wrapperRef, index, onMove, }: IProps<T>): IResult<T>;
export {};
