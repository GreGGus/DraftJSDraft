/**
 * Created by gregoire.portier on 18/01/17.
 */



export const BLOCK_TYPES = [
    {label: 'H1', style: 'header-four', icone:"FaBeer"},
    {label: 'H2', style: 'header-five', icone:"header"},
    {label: 'H3', style: 'header-six', icone:"header"},
    {label: 'Blockquote', style: 'blockquote', icone:"quote right"},
    {label: 'UL', style: 'unordered-list-item', icone:"unordered list"},
    {label: 'OL', style: 'ordered-list-item', icone:"ordered list"},
    {label: 'Code Block', style: 'code-block', icone:"code"},
    {label: 'Gauche', style: 'alignleft', icone:"align left"},
    {label: 'Centre', style: 'aligncenter', icone:"align center"},
    {label: 'Droite', style: 'alignright', icone:"align right"},
];

export var INLINE_STYLES = [
    {label: 'Gras', style: 'BOLD', icone:"bold"},
    {label: 'Italic', style: 'ITALIC', icone:"italic"},
    {label: 'Souligner', style: 'UNDERLINE', icone:"underline"},
    {label: 'Code', style: 'CODE',icone:"code"},
    {label: 'Barrer', style:'STRIKETHROUGH', icone:" strikethrough"}
];

export const colorStyleMap = {
    red: {
        color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)',
    },
};


// Définition couleurs
export var COLORS = [
    {label: 'Rouge', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Jaune', style: 'yellow'},
    {label: 'Vert', style: 'green'},
    {label: 'Bleu', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
];


export const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        fontSize: 14,
        padding: 20,
        width: 600,
    },
    editor: {
        borderTop: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        marginTop: 20,
        minHeight: 400,
        paddingTop: 20,
    },
    controls: {
        fontFamily: '\'Helvetica\', sans-serif',
        fontSize: 14,
        marginBottom: 10,
        userSelect: 'none',
    },
    styleButton: {
        color: '#999',
        cursor: 'pointer',
        marginRight: 16,
        padding: '2px 0',
    },
};
