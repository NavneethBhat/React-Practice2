import React from 'react';

const CardList = () => {
  const games = [
    'Uncharted 4',
    'Ghost of Tsushima',
    'Call of Duty',
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex justify-center gap-4">
        {games.map((game) => (
          <div className="w-64 bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold  text-gray-800 flex justify-center">{game}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
