export default function BlankState({ isLoading, error }) {
  if (isLoading) {
    return <div>Loading, please wait...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>We're sorry about that</h1>
        <p>There was a problem on our end loading the properties</p>
        <p>Please refresh the page to try again</p>
      </div>
    );
  }

  return null;
}
