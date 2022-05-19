import styled from '@emotion/native'

const GrayText = styled.Text<{ margin?: string; fontSize?: string }>`
  font-size: ${({ theme, fontSize }) => fontSize || theme.dimensions.fontSize.large};
  color: ${({ theme }) => theme.colors.input.placeholder};
  margin: ${({ margin }) => margin || '0'};
`

export default GrayText
