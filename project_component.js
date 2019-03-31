var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectComponent = function (_React$Component) {
    _inherits(ProjectComponent, _React$Component);

    function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);

        return _possibleConstructorReturn(this, (ProjectComponent.__proto__ || Object.getPrototypeOf(ProjectComponent)).apply(this, arguments));
    }

    _createClass(ProjectComponent, [{
        key: "render",
        value: function render() {
            var destTime = this.props.destTime;
            var origTime = this.props.origTime;
            var tripTime = this.props.tripTime;
            //const fares = this.props.fares;

            return React.createElement(
                "section",
                { className: "trip" },
                React.createElement(
                    "header",
                    { className: "time_schedule" },
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "span",
                            { id: "time_ori" },
                            origTime
                        ),
                        " ",
                        React.createElement("i", { className: "fas fa-chevron-right" }),
                        React.createElement("i", { className: "fas fa-chevron-right" }),
                        " ",
                        React.createElement(
                            "span",
                            { id: "time_dest" },
                            destTime
                        ),
                        React.createElement(
                            "span",
                            { id: "time_take" },
                            tripTime,
                            " min"
                        )
                    )
                ),
                React.createElement(
                    "details",
                    { className: "fare_detail" },
                    React.createElement(
                        "summary",
                        null,
                        React.createElement(
                            "span",
                            { id: "detail" },
                            "Detail"
                        ),
                        React.createElement(
                            "span",
                            { id: "fare" },
                            " $\"cash\""
                        )
                    ),
                    React.createElement("section", { className: "detail_info" })
                )
            );
        }
    }]);

    return ProjectComponent;
}(React.Component);

export default ProjectComponent;