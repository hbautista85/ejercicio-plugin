(function () {
    var el = wp.element.createElement;
    var registerBlockType = wp.blocks.registerBlockType;

    function getColorStyle(categoria) {
        switch (categoria) {
            case 'Nacional':
                return { backgroundColor: '#00B049', color: '#FFFFFF', padding: '20px' };
            case 'Entretenimiento':
                return { backgroundColor: '#FFC915', color: '#FFFFFF', padding: '20px' };
            case 'Tecnología':
                return { backgroundColor: '#00D3F8', color: '#FFFFFF', padding: '20px' };
            case 'Mascotas':
                return { backgroundColor: '#90456D', color: '#FFFFFF', padding: '20px' };
            case 'Deportes':
                return { backgroundColor: '#FF372C', color: '#FFFFFF', padding: '20px' };
            default:
                return { backgroundColor: '', color: '', padding: '20px' };
        }
    }

    registerBlockType('plugin-categoria-color/bloque', {
        title: 'Bloque Categoría Color',
        icon: 'admin-appearance',
        category: 'common',
        attributes: {
            categoria: {
                type: 'string',
                default: 'default',
            },
            titulo: {
                type: 'string',
                default: 'Título del bloque',
            },
            descripcion: {
                type: 'string',
                default: 'Descripción del bloque',
            },
        },
        edit: function (props) {
            var { categoria, titulo, descripcion } = props.attributes;

            function onChangeCategoria(value) {
                props.setAttributes({ categoria: value });
            }

            return el(
                'div',
                { className: 'wp-block-plugin-categoria-color-bloque', style: { ...getColorStyle(categoria) } },
                el(wp.blockEditor.InspectorControls, { key: 'inspector' },
                    el(wp.components.PanelBody, { title: 'Opciones' },
                        el(wp.components.SelectControl, {
                            label: 'Seleccionar Categoría',
                            value: categoria,
                            options: [
                                { label: 'Nacional', value: 'Nacional' },
                                { label: 'Entretenimiento', value: 'Entretenimiento' },
                                { label: 'Tecnología', value: 'Tecnología' },
                                { label: 'Mascotas', value: 'Mascotas' },
                                { label: 'Deportes', value: 'Deportes' },
                            ],
                            onChange: onChangeCategoria,
                        })
                    )
                ),
                el(wp.blockEditor.RichText, {
                    tagName: 'h2',
                    value: titulo,
                    onChange: function (value) {
                        props.setAttributes({ titulo: value });
                    },
                    placeholder: 'Título del bloque',
                    style: { color: getColorStyle(categoria).color },
                }),
                el(wp.blockEditor.RichText, {
                    tagName: 'p',
                    value: descripcion,
                    onChange: function (value) {
                        props.setAttributes({ descripcion: value });
                    },
                    placeholder: 'Descripción del bloque',
                    style: { color: getColorStyle(categoria).color },
                })
            );
        },
        save: function (props) {
            var { categoria, titulo, descripcion } = props.attributes;
            return el(
                'div',
                { className: 'wp-block-plugin-categoria-color-bloque', style: { ...getColorStyle(categoria) } },
                el('h2', { style: { color: getColorStyle(categoria).color } }, titulo),
                el('p', { style: { color: getColorStyle(categoria).color } }, descripcion)
            );
        },
    });
})();