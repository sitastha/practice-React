import React from 'react';
import { useLocation} from 'react-router-dom';


function NotFoundPage() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No page found for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NotFoundPage;