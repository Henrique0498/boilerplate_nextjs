import * as S from './styles'

interface InTitle extends React.ComponentPropsWithRef<'h1'> {}

const Title = ({ children, ...props }: InTitle) => {
  return <S.TitleStyle {...props}>{children}</S.TitleStyle>
}
export default Title
