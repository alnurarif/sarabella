import React, { Component } from 'react'
const Button = (props) => {
  let buttonBackground = (props.buttonBackground) ? props.buttonBackground : 'bg_brown2'
  let buttonFontSize = (props.buttonFontSize) ? props.buttonFontSize : 'fs_14'
  let buttonPaddingTop = (props.buttonPaddingTop) ? props.buttonPaddingTop : 'pt_10'
  let buttonPaddingBottom = (props.buttonPaddingBottom) ? props.buttonPaddingBottom : 'pb_10'
  let buttonPaddingRight = (props.buttonPaddingRight) ? props.buttonPaddingRight : 'pr_16'
  let buttonPaddingLeft = (props.buttonPaddingLeft) ? props.buttonPaddingLeft : 'pl_16'
  let buttonFontWeight = (props.buttonFontWeight) ? props.buttonFontWeight : 'font_bold'
  let buttonTextColor = (props.buttonTextColor) ? props.buttonTextColor : 'text_white'
  let buttonMarginLeft = (props.buttonMarginLeft) ? props.buttonMarginLeft : 'ml_10'
  let buttonMarginRight = (props.buttonMarginRight) ? props.buttonMarginRight : 'mr_10'
  let buttonFloat = (props.buttonFloat) ? props.buttonFloat : 'clear_both'
  return (
    <button 
    className={`${buttonBackground} ${buttonFontSize} ${buttonPaddingTop} ${buttonPaddingBottom} ${buttonPaddingRight} ${buttonPaddingLeft} ${buttonFontWeight} ${buttonTextColor} border_none ${buttonMarginLeft} ${buttonMarginRight} cursor_pointer ${buttonFloat}`}
    onClick={() => props.buttonFunction()}
    >{props.buttonTitle}</button>
  )
}
export default Button