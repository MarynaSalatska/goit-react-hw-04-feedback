import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div
      className="buttons"
      style={{ display: 'flex', gap: '20px', borderRadius: '5px' }}
    >
      {options.map(item => (
        <button key={item} name={item} type="button" onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

//в апп onLeaveFeedback = e => {
//   const { name } = e.target;
//   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
// switch (name) {
//   case 'good':
//     this.setState(prevState => ({ good: prevState.good + 1 }));
//     break;
//   case 'neutral':
//     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//     break;
//   case 'bad':
//     this.setState(prevState => ({ bad: prevState.bad + 1 }));
//     break;

//   default:
//     break;
// }
// };
