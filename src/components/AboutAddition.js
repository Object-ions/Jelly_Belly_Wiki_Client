import React from "react";

const AboutAdittion = () => {
  return (
    <div className="AboutAddition">
      <h2>Content and Sources</h2>
      <p>
        The content, including images and data, has been sourced from the
        official Jelly Belly website (
        <a
          href="https://www.jellybelly.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.jellybelly.com
        </a>
        ). It's important to note that I do not claim ownership of any
        information on this API or website, except for the original graphics of
        the logo and logotype. The rest of the content is a creative remix of
        the available information.
      </p>

      <h2>Contribution and Contact</h2>
      <p>
        If you have suggestions, comments, or contributions for this API or
        website, please feel free to reach out. You can contact me through the
        "Contact" section on this website or directly via email at{" "}
        <a href="mailto:moshikoatia@gmail.com">moshikoatia@gmail.com</a>. Your
        input and collaboration are greatly appreciated.
      </p>

      <h2>Repositories and Project Structure</h2>
      <p>
        This project is divided into three main parts, each with its own
        repository:
      </p>
      <ul>
        <li>
          <strong>1. Web Scraper Repository</strong> (
          <a
            href="https://github.com/Object-ions/capstone-supporting-files"
            target="blank"
          >
            GitHub Repo
          </a>
          ): This repository contains scripts and supporting files for data
          collection using Python, BeautifulSoup and ChromeDrive. It details the
          methodology used for creatively gathering data step by step until it
          was ready to be seeded into the C# API.
        </li>
        <li>
          <strong>2. API Repository</strong> (
          <a
            href="https://github.com/Object-ions/Jelly-Belly-Wiki-API"
            target="blank"
          >
            GitHub Repo
          </a>
          ) : The heart of the project, this repository holds the C# and EF Core
          .Net API with MySql migrations. It serves as the core database of the
          project. Detailed instructions on how to use this API are available in
          the repository, similar to the API Documentation provided in the UI.
        </li>
        <li>
          <strong>3. UI Repository</strong> (
          <a
            href="https://github.com/Object-ions/Jelly_Belly_Wiki_Client"
            target="blank"
          >
            GitHub Repo
          </a>
          ) : The User Interface makes full use of the API's database,
          showcasing one approach to design by utilizing all the endpoints and
          their various options.
        </li>
      </ul>
      <p className="note-about">
        <strong>Note:</strong> This is not the final version of this project,
        and it will continue to evolve. As it's a large-scale work and I am a
        precise person, this is still a work in progress.
      </p>
    </div>
  );
};

export default AboutAdittion;
