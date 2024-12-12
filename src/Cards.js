import React from 'react';

const CardList = () => {
  const games = [
    'Uncharted 4',
    'Ghost of Tsushima',
    'RDR 2',
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-wrap justify-center gap-4">
        {games.map((game) => (
          <div className="w-64 h-28 bg-white rounded-lg p-4 flex justify-center items-center">
            <h2 className="text-xl font-bold text-gray-800">{game}</h2>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default CardList;
