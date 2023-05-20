import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>NM Car toys Store | Blog</title>
      </Helmet>

      <div className="card my-4">
        <div className="card-header">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
        <div className="card-body">
         
          <p className="card-text">
            Access token and refresh token both used authentication and authorization systems. <br />
            <b>Access token:</b> Access token included a API request as an authorization header to verify client's permissions and authenticate the client.  ensure that  client has appropriate privileges to access the requested resources, the server verifies the access token. <br />

            <b>Refresh Token:</b> When access token expires, the client can send the refresh token to the authentication server to request a new access token without requiring the user to re-authenticate. This helps improve user experience and reduces the frequency of user logins.

            <br />
            <b>How do they work and where should we store them on the client-side?</b>
             <ul>
              <li>Client application sends user credentials to the authentication server </li>
              <li>The server verifies the credentials and, if valid, issues an access token and a refresh token. </li>
              <li> client stores the access token and refresh token securely for future use </li>
             </ul>
          </p>
          
        </div>
      </div>
      <div className="card my-4">
        <div className="card-header">Compare SQL and NoSQL databases?</div>
        <div className="card-body">
         
          <p className="card-text">
           <b>SQL Databases:</b> 
           <ul>
            <li>SQL databases follow a structure table , column and row </li>
            <li>SQL databases enforce strong data consistency  used  ACID (Atomicity, Consistency, Isolation, Durability) properties </li>
            <li>SQL databases use the structured query language (SQL) for querying and manipulating data. </li>
           </ul>
           <b>NoSQL Databases:</b>
           <ul>
            <li>NoSQL databases follow  a flexible data model, such as key-value, document, columnar, or graph, </li>
            <li>NoSQL databases provide schema flexibility, allowing for dynamic and evolving data structures without predefined schemas. </li>
            <li> NoSQL databases often have their query languages optimized for specific data  </li>
           </ul>
          </p>
          
        </div>
      </div>
      <div className="card my-4">
        <div className="card-header">What is express js? What is Nest JS ?</div>
        <div className="card-body">
         
          <p className="card-text">
          Express.js is a  flexible web application framework for Node.js. It provides  of features and utilities for building web applications, APIs, and server-side applications 
          <br />
          <br />
          NestJS is a progressive, opinionated, and powerful framework for building scalable and maintainable server-side applications. It is built with TypeScript 
          </p>
          
        </div>
      </div>
      <div className="card my-4">
        <div className="card-header">What is MongoDB aggregate and how does it work?</div>
        <div className="card-body">
         
          <p className="card-text">
          Aggregate is a powerful method used for data aggregation and analysis within the MongoDB database. It allows  perform complex operations on collections of documents and retrieve aggregated results based on specified criteria.

          <br />
          <b>Its  how does it work ? here is a example: </b>
          <img src="https://i.ibb.co/7438dDC/aggre.png" alt="aggre" border="0" />
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
