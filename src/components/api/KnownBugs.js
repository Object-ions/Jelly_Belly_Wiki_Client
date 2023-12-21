import React from "react";

const knownBugs = () => {
  return (
    <div>
      <h2>Known Bugs</h2>
      <hr />
      <h3>Description:</h3>
      <p>
        Currently, there is a notable bug in the API concerning the structure of
        arrays. The expected behavior is to receive an array of strings.
        However, the API is returning an array containing a single element (at
        index 0) where the items are concatenated into a single string,
        separated by commas (,).
      </p>
      <h3>Temporary Workaround:</h3>
      <p>
        In the user interface (UI), we have implemented a JavaScript-based
        solution to address this issue. This script manipulates the data
        received from the API to transform it back into the intended format,
        which is an array of individual strings. This approach ensures that the
        data is displayed correctly in the UI, despite the existing bug in the
        API.
      </p>
    </div>
  );
};

export default knownBugs;
