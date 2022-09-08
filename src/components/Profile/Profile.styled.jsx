import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 100px;
  max-width: 350px;
  text-align: center;
  padding: 10px;
  border-radius: 30px;
  background-color: #e0ffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  border-radius: 50%;
  background-color: #ffffffa6;
  width: 80%;
`;

export const Name = styled.p`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 25px;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

export const Quantity = styled.span`
  font-size: 25px;
`;
// export const Container = styled.div`\
//   padding: 40px 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 40px;
//   color: #010101;
// `;

// {
/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>; */
// }
