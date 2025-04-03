document.addEventListener('DOMContentLoaded', () => {
    const snake = document.getElementById('snake');
    const container = document.querySelector('.snake-container');
    
    function getRandomPosition() {
        const containerRect = container.getBoundingClientRect();
        const snakeRect = snake.getBoundingClientRect();
        
        const maxX = containerRect.width - snakeRect.width;
        const maxY = containerRect.height - snakeRect.height;
        
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }
    
    function moveSnake() {
        const newPosition = getRandomPosition();
        snake.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }
    
    // Initial position
    moveSnake();
    
    // Move every 30 seconds
    setInterval(moveSnake, 30000);
}); 