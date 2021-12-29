import { Button } from "./Button";

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  genreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, genreId, handleClickButton }: SideBarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}