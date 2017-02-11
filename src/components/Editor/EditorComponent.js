/**
 * Created by gregoire.portier on 18/01/17.
 */
import React, { Component } from 'react';
import {Card, Menu,  Label,  Icon ,Button} from 'semantic-ui-react'
import Immutable, { Map, List } from 'immutable';

import Draft,{ EditorDraft, Entity, Modifier, CompositeDecorator, convertFromRaw, EditorState,ContentState, RichUtils, ContentBlock, genKey} from 'draft-js';
// import Editor from 'draft-js-plugins-editor';
import {stateToHTML} from 'draft-js-export-html'; // Export HTML
import Editor from 'draft-js-plugins-editor'
import initialState from './initialStateEditor.js'
import mentions from './mentions.js'

import '../../../node_modules/draft-js-focus-plugin/lib/plugin.css'
import '../../../node_modules/draft-js-mention-plugin/lib/plugin.css'
//import '../../../public/editor.css'  // Rich Text css

import FaDimand from 'react-icons/lib/fa/diamond'
import ModalEditor from './ModalEditor'

import {colorStyleMap,INLINE_STYLES} from './Constantes'
import createMentionPlugin, { defaultSuggestionsFilter } from 'stevensacks-draft-js-mention-plugin'; // eslint-disable-line import/no-unresolved

import { BlockStyleControls, InlineStyleControls, ColorControls, StyleButton, InlineStyleControlsDebug} from './ButtonStyle'



//  <Label
  //  onClick={mentionPlugin.editor}> {props.decoratedText}
//</Label>

const mentionPlugin = createMentionPlugin({
  mentions,
  mentionComponent: (props) => (
    <span
      className={props.className}
      // eslint-disable-next-line no-alert
      onClick={() => alert('Clicked on the Mention!')}
    >
      {props.decoratedText}
    </span>
  ),
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];


const Entry = (props) => {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      {mention.get('name')}
    </div>
  );
};




export class EditorComponent extends Component {

    constructor(props) {
        super(props);
        mentionPlugin.onClickShowModal = this.setState({modalBool:true})
        mentionPlugin.focus=this.focus
        // Stocker state Editeur
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this.onTab(e);


        this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);


        this.onChange = (editorState) => {
            this.setState({editorState});
        }

        this.state = {
            editorState: EditorState.createWithContent(convertFromRaw(initialState)),
            modalBool: false,
            suggestions: mentions
        };

    } // Fin constructor

    render() {
        var currentStyle = this.state.editorState.getCurrentInlineStyle();
        return (
            <div>
            <Button.Group>
                <BlockStyleControls
                    editorState={this.state.editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={this.state.editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <ColorControls
                editorState={this.state.editorState}
                onToggle={this.toggleColor}
                 />
            </Button.Group>
                <div className="editor" onClick={this.focus}>
                    <Editor
                        blockRenderMap={extendedBlockRenderMap}
                        blockStyleFn={getBlockStyle}
                        customStyleMap={colorStyleMap}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                        onTab={this.onTab}
                        spellCheck={false}
                        decorators={this.decorator}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                    <MentionSuggestions
                             onSearchChange={this.onSearchChange}
                             suggestions={this.state.suggestions}
                             onAddMention={this.onAddMention}
                             entryComponent={Entry}

                           />
                </div>

                <Button onClick={this.getContentData.bind(this)}> Export HTML console</Button>
                <Button onClick={this.logState.bind(this)}> Log State</Button>
                <button onClick={this.clickAddEntity.bind(this)} >  New entity </button>
                <button onClick={this.clickAddBlockContent.bind(this)} >  New BlockContent </button>
                <ModalEditor open={this.state.modalBool}
                             onClick={this._handleModal.bind(this)} />
            </div>
        );
    } // Fin render

    // Toggle block
    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    // Toggle style
    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }


    // BOUTTON INLINE STYLE
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    _onMonoSpaceClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }

    _onStrikeThroughClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
    }


    // BOUTTON BLOCK STYLE
    _onHeaderOneClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-one"));
    }

    _onHeaderTwoClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-two"));
    }

    _onHeaderThreeClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-three"));
    }

    _onHeaderFourClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "header-four"));
    }

    _onBlockQuoteClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "blockquote"));
    }

    _onULClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "unordered-list-item"));
    }

    _onOLClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "ordered-list-item"));
    }

    _onCodeClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "code-block"));
    }

    _onLeftClick(){
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "alignleft"));
    }

    _onRightClick(){
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "alignright"));
    }

    _onCenterClick(){
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, "alignright"));
    }

    // toggleColor
    _toggleColor(toggledColor) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());
        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );
        const currentStyle = editorState.getCurrentInlineStyle();
        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }

        this.onChange(nextEditorState);
    }

    // AddBlock
    clickAddBlockContent(){
        // Création d'un bloc
        const newBlock = new ContentBlock({
            key: genKey(),
            type: 'unstyled',
            text:'newBlock',
            characterList : List()
        })

        const contentState1 = this.state.editorState.getCurrentContent();
        const newBlockMap = contentState1.getBlockMap().set(newBlock.key,newBlock)
        const newEditorState=  EditorState.push(
            this.state.editorState,
            ContentState
                .createFromBlockArray(newBlockMap.toArray())
                .set('selectionBefore', contentState1.getSelectionBefore())
                .set('selectionAfter', contentState1.getSelectionAfter())
        )
        this.onChange(newEditorState)
    }

    // Ajout d'entity
    clickAddEntity(){
        // Création d'une entity
        const entityKey = Entity.create('LINK', 'MUTABLE', {href: 'http://www.zombo.com'});
        const contentState=this.state.editorState.getCurrentContent();
        const selectionState=this.state.editorState.getSelection();
        const contentStateWithLink = Modifier.applyEntity(
            contentState,
            selectionState,
            entityKey
        );

        const newState = EditorState.push(this.state.editorState,contentStateWithLink)
        this.onChange(newState);
    }


    // On tab
    onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }


    // rechercheMentions
    onSearchChange = ({ value }) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions),
        });
    };

    // Ajout d'une mention  liaison proc
    onAddMention = (data) => {
        console.log(data)
    }

    // Export HTML
    getContentData() {
        let html = stateToHTML(this.state.editorState.getCurrentContent());
    }


    // Log state
    logState() {
      //  console.log(this.state.editorState.toJS());
    }



    _handleModal() {
        if (!this.state.modalBool) {
            this.setState({
                modalBool: true
            })
        } else {
            this.setState({
                modalBool: false
            })
        }
    }


    focus = () => {
      console.log("focus")
        this.editor.focus();
    };

}

// CustomBlock

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        case 'alignleft': return 'RichEditor-alignleft';
        case 'aligncenter': return 'RichEditor-aligncenter';
        case 'alignright': return 'RichEditor-alignright';
        default: return null;
    }
}

const blockRenderMap = Immutable.Map({
    'alignleft':{
        element:'left'
    },
    'aligncenter':{
        element:'center'
    },
    'alignright':{
        element:'right'
    }
})

const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);


export default EditorComponent
