wp.blocks.registerBlockType('imanoor/custom-block',{
    title:'imanoor custom block',
    icon: 'hammer',
    category:'design',
    attributes: {
        courseName:        {type:'string'},
        courseDescription: {type:'string'},
        courseUrl:         {type:'string'},
        courseImageUrl:    {type:'string'},
        courseTheme:       {type:'string'},
    },
    edit: function (props){

        function updateCourseName(event){ props.setAttributes({courseName: event.target.value})}
        function updateCourseDescription(event){ props.setAttributes({courseDescription: event.target.value})}
        function updateCourseUrl(event){ props.setAttributes({courseUrl: event.target.value})}
        function updateCourseImageUrl(event){ props.setAttributes({courseImageUrl: event.target.value})}
        function updateCourseTheme(event){ props.setAttributes({courseTheme: event.target.value})}


        return React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0646\u0627\u0645 \u062F\u0648\u0631\u0647: "), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.courseName,
            onChange: updateCourseName,
            placeholder: "Enter your course name..."
        }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0645\u062E\u062A\u0635\u0631 \u062F\u0648\u0631\u0647: "), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.courseDescription,
            onChange: updateCourseDescription,
            placeholder: "Enter your course description..."
        }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "\u0644\u06CC\u0646\u06A9 \u062F\u0648\u0631\u0647: "), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.courseUrl,
            onChange: updateCourseUrl,
            placeholder: "Enter your course url..."
        }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "\u0644\u06CC\u0646\u06A9 \u062A\u0635\u0648\u06CC\u0631 \u062F\u0648\u0631\u0647: "), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.courseImageUrl,
            onChange: updateCourseImageUrl,
            placeholder: "Enter your course image url..."
        }), /*#__PURE__*/React.createElement("p", null, "\u0646\u0648\u0639 \u0642\u0627\u0644\u0628:(bg-secondary-2 - bg-secondary - bg-primary)"), /*#__PURE__*/React.createElement("input", {
                type: "text",
                value: props.attributes.courseTheme,
                onChange: updateCourseTheme,
            })
        );
    },
    save: function (props){

        if( props.attributes.courseTheme === 'bg-secondary-2' ){
            return React.createElement("div", {
                class: "rounded-tr-3xl relative overflow-hidden rounded-bl-3xl flex mt-3 bg-secondary-2 text-white min-h-64"
            }, /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 absolute inset-0 lg:relative"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0 bg-gradient-to-l lg:bg-gradient-to-r from-secondary-2 to-transparent z-10"
            }, /*#__PURE__*/React.createElement("img", {
                src: props.attributes.courseImageUrl,
                class: "min-w-full min-h-full opacity-60 lg:opacity-80",
                alt: "\u062F\u0648\u0631\u0647 \u0627\u0646\u062F\u06CC\u0634\u0647 \u06CC\u0627\u0628\u06CC \u0627\u0632 \u0642\u0631\u0627\u0646"
            })))), /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 flex justify-center z-20 flex-col py-8 px-5 relative"
            }, /*#__PURE__*/React.createElement("h4", {
                class: "text-lg lg:text-xl font-semibold"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl
            }, props.attributes.courseName)), /*#__PURE__*/React.createElement("p", {
                class: "text-md lg:pl-20 font-thin"
            }, props.attributes.courseDescription), /*#__PURE__*/React.createElement("div", {
                class: "mt-2"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl,
                class: "btn btn-primary"
            }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A")), /*#__PURE__*/React.createElement("svg", {
                class: "w-56 -z-1 opacity-30 h-56 absolute right-0 lg:right-auto lg:left-0 bottom-0 lg:transform lg:-translate-x-1/5 lg:translate-y-1/3 transform translate-x-1/5 translate-y-1/3"
            }, /*#__PURE__*/React.createElement("use", {
                href: "#course"
            }))));
        } else if(props.attributes.courseTheme === 'bg-secondary'){
            return React.createElement("div", {
                class: "rounded-tr-3xl relative overflow-hidden rounded-bl-3xl flex mt-3 bg-secondary text-white min-h-64"
            }, /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 absolute inset-0 lg:relative"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0 bg-gradient-to-l lg:bg-gradient-to-r from-secondary to-transparent z-10"
            }, /*#__PURE__*/React.createElement("img", {
                src: props.attributes.courseImageUrl,
                class: "min-w-full min-h-full opacity-60 lg:opacity-80",
                alt: "\u062F\u0648\u0631\u0647 \u0627\u0646\u062F\u06CC\u0634\u0647 \u06CC\u0627\u0628\u06CC \u0627\u0632 \u0642\u0631\u0627\u0646"
            })))), /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 flex justify-center z-20 flex-col py-8 px-5 relative"
            }, /*#__PURE__*/React.createElement("h4", {
                class: "text-lg lg:text-xl font-semibold"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl
            }, props.attributes.courseName)), /*#__PURE__*/React.createElement("p", {
                class: "text-md lg:pl-20 font-thin"
            }, props.attributes.courseDescription), /*#__PURE__*/React.createElement("div", {
                class: "mt-2"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl,
                class: "btn btn-primary"
            }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A")), /*#__PURE__*/React.createElement("svg", {
                class: "w-56 -z-1 opacity-30 h-56 absolute right-0 lg:right-auto lg:left-0 bottom-0 lg:transform lg:-translate-x-1/5 lg:translate-y-1/3 transform translate-x-1/5 translate-y-1/3"
            }, /*#__PURE__*/React.createElement("use", {
                href: "#lesson"
            }))));
        } else if(props.attributes.courseTheme === 'bg-primary'){
            return React.createElement("div", {
                class: "rounded-tr-3xl relative overflow-hidden rounded-bl-3xl flex mt-3 bg-primary text-white min-h-64"
            }, /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 absolute inset-0 lg:relative"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0"
            }, /*#__PURE__*/React.createElement("div", {
                class: "absolute inset-0 bg-gradient-to-l lg:bg-gradient-to-r from-primary to-transparent z-10"
            }, /*#__PURE__*/React.createElement("img", {
                src: props.attributes.courseImageUrl,
                class: "min-w-full min-h-full opacity-60 lg:opacity-80",
                alt: "\u062F\u0648\u0631\u0647 \u0627\u0646\u062F\u06CC\u0634\u0647 \u06CC\u0627\u0628\u06CC \u0627\u0632 \u0642\u0631\u0627\u0646"
            })))), /*#__PURE__*/React.createElement("div", {
                class: "lg:w-1/2 flex justify-center z-20 flex-col py-8 px-5 relative"
            }, /*#__PURE__*/React.createElement("h4", {
                class: "text-lg lg:text-xl font-semibold"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl
            }, props.attributes.courseName)), /*#__PURE__*/React.createElement("p", {
                class: "text-md lg:pl-20 font-thin"
            }, props.attributes.courseDescription), /*#__PURE__*/React.createElement("div", {
                class: "mt-2"
            }, /*#__PURE__*/React.createElement("a", {
                href: props.attributes.courseUrl,
                class: "btn btn-primary-2"
            }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A")), /*#__PURE__*/React.createElement("svg", {
                class: "w-56 -z-1 opacity-30 h-56 absolute right-0 lg:right-auto lg:left-0 bottom-0 lg:transform lg:-translate-x-1/5 lg:translate-y-1/3 transform translate-x-1/5 translate-y-1/3"
            }, /*#__PURE__*/React.createElement("use", {
                href: "#webinar-mono"
            }))));
        }
    }
})