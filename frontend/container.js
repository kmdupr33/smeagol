import styled from "styled-components";
import { colors, colorUtils } from "@airtable/blocks/ui";
export default styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colorUtils.getHexForColor(colors.BLUE)};
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
