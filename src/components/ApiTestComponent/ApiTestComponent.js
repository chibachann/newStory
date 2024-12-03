// ApiTestComponent.js
import React, { useState } from 'react';
import * as styles from './ApiTestComponent.module.css';

const ApiTestComponent = () => {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testEndpoints = async (type) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;
      switch (type) {
        case 'simple':
          response = await fetch(process.env.GATSBY_API_TEST_ENDPOINT, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          break;
        case 'lambda':
          response = await fetch(process.env.GATSBY_API_LAMBDA_TEST_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              test: 'data',
              timestamp: new Date().toISOString()
            }),
          });
          break;
        case 'ses':
          response = await fetch(process.env.GATSBY_API_EMAIL_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: 'test@example.com',
              subject: 'Test Email',
              body: 'This is a test email',
              timestamp: new Date().toISOString()
            }),
          });
          break;
        default:
          throw new Error('Unknown test type');
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResults(prev => ({ ...prev, [type]: data }));
    } catch (err) {
      setError(`${type} test failed: ${err.message}`);
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AWS API テスト</h1>
      <div className={styles.testPanel}>
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.testSection}>
          <h2>1. Simple API Test</h2>
          <button 
            onClick={() => testEndpoints('simple')}
            disabled={isLoading}
            className={styles.button}
          >
            Test API Connection
          </button>
          {results.simple && (
            <pre className={styles.result}>
              {JSON.stringify(results.simple, null, 2)}
            </pre>
          )}
        </div>

        <div className={styles.testSection}>
          <h2>2. Lambda Test</h2>
          <button 
            onClick={() => testEndpoints('lambda')}
            disabled={isLoading}
            className={styles.button}
          >
            Test Lambda Function
          </button>
          {results.lambda && (
            <pre className={styles.result}>
              {JSON.stringify(results.lambda, null, 2)}
            </pre>
          )}
        </div>

        <div className={styles.testSection}>
          <h2>3. SES Test</h2>
          <button 
            onClick={() => testEndpoints('ses')}
            disabled={isLoading}
            className={styles.button}
          >
            Test Email Sending
          </button>
          {results.ses && (
            <pre className={styles.result}>
              {JSON.stringify(results.ses, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiTestComponent;
