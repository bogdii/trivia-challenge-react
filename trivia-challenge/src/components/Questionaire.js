import React from 'react';

const Button = ({ answer }) => (
    <button className="p-4 rounded-lg w-48 border-2 border-blue-800 uppercase hover:text-white hover:bg-blue-800">{answer}</button>
);

const Questionaire = ({data}) => (
    <div>
        <h1 className="text-5xl font-bold">{data.category}</h1>
        <p className="mt-10 text-2xl">Level: {data.difficulty}</p>
        <div className="p-8">
            <h2 className="text-2xl" dangerouslySetInnerHTML={{__html: data.question}}/>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4 font-semibold ">
            <Button answer={data.correct_answer} />
            <Button answer={data.incorrect_answers} />
        </div>
    </div>
);
export default Questionaire;