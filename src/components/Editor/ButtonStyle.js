/**
 * Created by gregoire.portier on 20/01/17.
 */
import React, { Component } from 'react';
import { Button} from 'semantic-ui-react'
import { BLOCK_TYPES, INLINE_STYLES, colorStyleMap, COLORS, styles} from './Constantes'
import FaBeer from 'react-icons/lib/fa/beer';
import MdFormatAlignJustify from 'react-icons/lib/md/format-align-justify'



export const InlineStyleControlsDebug = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {/*{INLINE_STYLES.map(type =>*/}
                {/*<StyleButton*/}
                    {/*icone={type.icone}*/}
                    {/*key={type.label}*/}
                    {/*label={type.label}*/}
                    {/*onToggle={props.onToggle}*/}
                    {/*style={type.style}*/}
                {/*/>*/}
            {/*)}*/}
            <ButtonTest onToggle={props.onToggle} active={currentStyle.has("BOLD")} style="BOLD" />
            {/*<ButtonTest onToggle={props.onToggle} active={currentStyle.has("ITALIC")} style="italic" />*/}
            {/*<ButtonTest onToggle={props.onToggle} active={currentStyle.has("UNDERLINE")} style="underline" />*/}
            {/*<ButtonTest onToggle={props.onToggle} active={currentStyle.has("CODE")} style="code" />*/}
            {/*<ButtonTest onToggle={props.onToggle} active={currentStyle.has("STRIKETHROUGH")} style="strikethrough" />*/}

        </div>
    );
}


export class ButtonTest extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render(){
        return (
            <Button icon={this.props.style} active={this.props.active} onMouseDown={this.onToggle}>
            </Button>
        );
    }
}



export const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    icone={type.icone}
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};




// Bouttons des styles.

export class StyleButton extends React.Component {
    constructor(props) {

    function strcmp(a, b)
    {
        return (a<b?-1:(a>b?1:0));
    }
        super(props);
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
        console.log("greg")
        console.log(props)
        let icone = this.props.icone
        let  la=""

console.log(icone)
console.log(strcmp(icone,"FaBeer"))
console.log(strcmp("greg","greg"))

let t = strcmp(this.icone,"FaBeer")
        if(t)
        {
        this.la=<FaBeer />
        }else{
        this.la=<MdFormatAlignJustify />
        }
    }

    render() {
        return (
            <Button icon={this.la} active={this.props.active} onMouseDown={this.onToggle}>
            </Button>
        );
    }
}







export const BlockStyleControls = (props) => {
    console.log("renderBlock")
    const {editorState} = props;
    const selection = editorState.getSelection();
    // recuper blockType
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    icone={type.icone}
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};





class StyleColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let style;
        if (this.props.active) {
            style = {...styles.styleButton, ...colorStyleMap[this.props.style]};
        } else {
            style = styles.styleButton;
        }

        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} style={style} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
        );
    }
}



export const ColorControls = (props) => {
    // var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div style={styles.controls}>
            {COLORS.map(type =>
                <StyleColorButton
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}


        </div>
    );
};
