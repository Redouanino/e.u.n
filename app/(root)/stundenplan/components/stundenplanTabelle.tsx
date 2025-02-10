"use client";

import {cn} from "@/libs/utils";
import React from "react";

interface stundenplanProps {

  stundenplan: string[][];

}

const StundenplanTabelle: React.FC<stundenplanProps> = ({stundenplan}) => {
  return (

      <div className='rounded-2xl overflow-hidden border-2 border-blue-950'>
        <table id='Stundenplan' className='rounded-2xl overflow-hidden border-collapse border-none'>

          <thead>
          <tr>
            {stundenplan[0].map((cell, index) => (
                <th key={index}
                    className={cn('border-b border-gray-800 p-2 bg-gray-600 text-white font-bold', index !== 0 && 'border-l')}>
                  {cell}
                </th>
            ))}
          </tr>
          </thead>
          <tbody>
          {stundenplan.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}
                        className={cn('border-t border-gray-800 p-2 text-center', colIndex !== 0 && 'border-l', rowIndex % 2 === 0 && 'bg-black/10')}>
                      {cell}
                    </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>

  );
};

export default StundenplanTabelle;
