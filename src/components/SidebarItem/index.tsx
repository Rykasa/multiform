import { Link } from 'react-router-dom';
import * as C from './styles'
import { FaDatabase, FaUser, FaBook, FaMailBulk } from 'react-icons/fa'

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) =>{
  return(
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === 'profile' &&
            <FaUser className='icon' />
          }
          {icon === 'book' &&
            <FaBook className='icon' />
          }
          {icon === 'mail' &&
            <FaMailBulk className='icon' />
          } 
          {icon == 'data' &&
            <FaDatabase className='icon' />
          }
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  )
}