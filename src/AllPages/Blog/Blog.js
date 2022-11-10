import React from 'react';
import useTitle from '../hooks/useTitle';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';


const Blog = () => {
  useTitle('Blog')
    return (
        <div className=' container my-5 py-5 blog-style'>
        <h2>Important Questions</h2>
        <Accordion defaultActiveKey="0" className='w-50 container'>
  <Accordion.Item eventKey="0" >
    <Accordion.Header  ><h5><b>What are the differences between SQL and NoSQL?</b></h5></Accordion.Header>
    <Accordion.Body>
          <b> The differences between SQL vs NoSQL are:</b>
            <br /><br />
                <p>1.SQL databases are relational, NoSQL databases are non-relational.</p>
                <p>2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                <p>3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                <p>4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                <p>5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><h5><b>What is JWT, and how does it work?</b></h5></Accordion.Header>
    <Accordion.Body>
    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
    <br /><br />
    <b>How JWT Works :</b>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.  Once decoded, you will get two JSON strings: <br />
     1.The header and the payload.
     2.The signature. 
     <br />
      The <b>JOSE (JSON Object Signing and Encryption) header</b>contains the type of token — JWT in this case — and the signing algorithm. <br />
      The <b>payload</b> contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
      There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br />
      The <b>signature</b> ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header> <h5><b> What is the difference between javascript and NodeJS?</b></h5></Accordion.Header>
    <Accordion.Body>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
    Javascript can only be run in the browsers. But We can run Javascript outside the browser with the help of NodeJS.Javascript is capable enough to add HTML and play with the DOM.Nodejs does not have capability to add HTML tags. <br />
    Javascript is used in frontend development.	Nodejs is used in server-side development.
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header> <h5><b>How does NodeJS handle multiple requests at the same time?</b></h5></Accordion.Header>
    <Accordion.Body>
    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. When multiple requests are made at the same time, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly.
    </Accordion.Body>
  </Accordion.Item>



         </Accordion>

         

    </div>
    
    );
};

export default Blog;