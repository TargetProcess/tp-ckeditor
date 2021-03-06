/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
/*global CKEDITOR, $*/
/*eslint camelcase: 0 */
/*jshint camelcase: false */
CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here.
    // For the complete reference:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbarGroups = [
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
        {name: 'links'},
        {name: 'insert'},
        {name: 'forms'},
        {name: 'tools'},
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'others'},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'about'}
    ];

    // Se the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Make dialogs simpler.
    config.removeDialogTabs = 'image:advanced;link:advanced';

    config.disableAutoInline = true;
    config.extraAllowedContent = {
        'span': {
            classes: 'mention'
        }
    };

    config.plugins = config.plugins + ',sourceautogrow,customize,image,tauuploader,mentions,divarea,font,colorbutton,justify,pastetools,pastefromword,pastetext,tableresize,clipboard';

    config.enterMode = CKEDITOR.ENTER_DIV;
    config.language = 'en';

    config.disableNativeSpellChecker = false;
    config.browserContextMenuOnCtrl = true;

    config.resize_enabled = false;

    config.templates_replaceContent = false;

    config.removePlugins = 'autogrow,magicline,elementspath';

    config.filebrowserUploadMethod = 'form';

    config.toolbar_Full = [
        ['Cut', 'Copy', 'Paste', '-', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
        ['Link', 'Unlink', 'Anchor'],
        ['Image', 'Table', 'HorizontalRule', 'SpecialChar'],
        ['Source', 'Format', 'Font', 'FontSize'],
        ['Replace', '-', 'RemoveFormat', 'TextColor', 'BGColor', '-', 'Templates'],
        ['Maximize']
    ];

    config.toolbar_Basic = [
        ['Bold', 'Italic', 'Underline', 'Strike'],
        ['NumberedList', 'BulletedList'],
        ['Link', 'Unlink'],
        ['Image'],
        ['Source']
    ];
};

CKEDITOR.plugins.addExternal('divarea', '../custom/plugins/divarea/');
CKEDITOR.plugins.addExternal('font', '../custom/plugins/font/');
CKEDITOR.plugins.addExternal('colorbutton', '../custom/plugins/colorbutton/');
CKEDITOR.plugins.addExternal('justify', '../custom/plugins/justify/');
CKEDITOR.plugins.addExternal('charcount', '../custom/plugins/charcount/');
CKEDITOR.plugins.addExternal('sourceautogrow', '../custom/plugins/sourceautogrow/');
CKEDITOR.plugins.addExternal('customize', '../custom/plugins/customize/');
CKEDITOR.plugins.addExternal('image', '../custom/plugins/image/');
CKEDITOR.plugins.addExternal('tauuploader', '../custom/plugins/tauuploader/');
CKEDITOR.plugins.addExternal('mentions', '../custom/plugins/mentions/');
CKEDITOR.plugins.addExternal('tableresize', '../custom/plugins/tableresize/');
CKEDITOR.plugins.addExternal('clipboard', '../custom/plugins/clipboard/');
