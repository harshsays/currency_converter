// action types

export const BG_COLOR="Background Color" //universal

export const FONT_COLOR="Font Color";  //universal

// action creator
export const bgColor=(color)=>({type:BG_COLOR,color});
export const fontColor=(color)=>({type:FONT_COLOR,color})