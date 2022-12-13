export const ErrorMessage = ({ touched, error }) => {
    if (!touched) {
        return <div className="form-message form-message-error">&nbsp; </div>;
    }
    if (error) {
        return <div className="form-message form-message-error">{error} </div>;
    }
    return <div className="form-message form-message-success">All good!</div>;
};