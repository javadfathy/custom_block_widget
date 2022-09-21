wp.blocks.registerBlockType('brandName/custom-block2',{
    title:'افزودن آیه قرآن',
    icon: 'editor-textcolor',
    category:'design',
    attributes: {
        textQuran:        {type:'string'},

    },
    edit: function (props){

        function updateTextQuran(event){ props.setAttributes({textQuran: event.target.value})}

        return React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0622\u06CC\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F:"), /*#__PURE__*/React.createElement("textarea", {
            rows: "4",
            cols: "100",
            onChange: updateTextQuran
        }, props.attributes.textQuran));
    },
    save: function (props){
        return React.createElement("div", {
            class: "flex items-center py-3"
        }, /*#__PURE__*/React.createElement("div", {
            class: "w-12 text-secondary-2"
        }, /*#__PURE__*/React.createElement("svg", {
            class: "w-8"
        }, /*#__PURE__*/React.createElement("use", {
            href: "#quran-divide"
        }))), /*#__PURE__*/React.createElement("div", {
            class: "font-naskh text-md w-full"
        }, props.attributes.textQuran));
    }
})