import React, { useState, useEffect } from 'react';

import Work from './work';
import Workfeedback from './workfeedback';
import Worksection from './worksection'

const ourWork = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
        <Work />
        <Worksection />
        <Workfeedback />
      </div>
    );
  };

  export default ourWork;