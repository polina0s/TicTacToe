import './styles/main.scss';
import { Game } from './pages/game';

document.addEventListener('DOMContentLoaded', bootstrap);

function bootstrap() {
  const game = new Game();

  console.log(game.player);

  game.togglePlayer();

  console.log(game.player);
}
