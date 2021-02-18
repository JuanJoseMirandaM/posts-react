import React from 'react';
import styled from '@emotion/styled';
import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar({email}) {
  const hash = md5(email);

  const GravatarImg = styled.img`
    border-radius: 50%;
    background: #a3a3a3;
    margin-right: 0.5rem;
    width: 80px;
    height: 80px;
  `;

  return (
    <GravatarImg
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
