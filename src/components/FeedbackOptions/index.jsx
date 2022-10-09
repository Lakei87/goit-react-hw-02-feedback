import { Component } from "react";
import PropTypes from 'prop-types';
import { Button } from "./feedbackOptions.styled";

class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            options.map((option, index) => {
                return <Button
                    key={index}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {option}
                </Button>
            })
        );
    };
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;