import createImagePlugin from 'draft-js-image-plugin';
// eslint-disable-next-line import/no-unresolved
import createAlignmentPlugin from 'draft-js-alignment-plugin';
// eslint-disable-next-line import/no-unresolved
import createFocusPlugin from 'draft-js-focus-plugin';
// eslint-disable-next-line import/no-unresolved
import createResizeablePlugin from 'draft-js-resizeable-plugin';
// eslint-disable-next-line import/no-unresolved
import createDndPlugin from 'draft-js-dnd-plugin';

import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'; // eslint-disable-line import/no-unresolved


import { composeDecorators } from 'draft-js-plugins-editor';


  const focusPlugin = createFocusPlugin();
  const resizeablePlugin = createResizeablePlugin();
  const dndPlugin = createDndPlugin();
  const alignmentPlugin = createAlignmentPlugin();
  const mentionPlugin = createMentionPlugin();

  export const { AlignmentTool } = alignmentPlugin;
  export const { MentionSuggestions } = mentionPlugin;

 const creationPlugins = () => {

  const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
    dndPlugin.decorator
  );

   const imagePlugin = createImagePlugin({ decorator });

   const plugins = [dndPlugin, focusPlugin, alignmentPlugin, resizeablePlugin, imagePlugin, mentionPlugin];

return plugins;

}

export default creationPlugins
