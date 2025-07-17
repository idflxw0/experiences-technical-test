export function LoadingSpinner() {
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p>Loading characters...</p>
        </div>
    );
}

export function ErrorMessage({ message }: { message: string }) {
    return (
        <div className="error">
            <p>Error: {message}</p>
        </div>
    );
}
