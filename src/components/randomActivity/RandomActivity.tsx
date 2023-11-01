import { FC, useEffect, useState } from 'react';
import Activity from './types/Activity';
import MyButton from '../myButtom/MyButton';

const RandomActivity: FC = () => {
   // создали первоночальное значение для UseState
  const initialValue: Activity = {
    accessibility: 0,
    activity: '',
    key: '',
    link: '',
    participants: 0,
    price: 0,
    type: ''
  };
                         // в качестве дженерика передаем Activity и первоночальное значение initialValue
      const [activity, setActivity] = useState<Activity>(initialValue);
                            // будет работать с промисами
    async function loadActivity(): Promise<void> {
    const res = await fetch('https://www.boredapi.com/api/activity');
    const data = await res.json();
    setActivity(data);
  } // мы вызываем асинхронный запрос в useEffect()
  useEffect(() => {
    loadActivity();
  }, []);
  return (
    <div>
      <h1>RandomActivity</h1>
      <p>Попробуй: {activity.activity}</p>
      {/* не забывайте указывать знак вопроса, если обращаетесь к объекту с бека (вдруг он undefined) */}
      {/* {activity?.link && <p>Узнать больше: <a target="_blank" href={activity.link} rel="noreferrer"> */}
      {activity?.link ?
        (<p>Узнать больше: <a target="_blank" href={activity.link} rel="noreferrer">{activity.link}</a></p>) :
        (<a target="_blank" href={`https://www.google.com/search?q=${activity.activity}`} rel="noreferrer"><p>Искать в гугле</p></a>)}
      <MyButton onClick={loadActivity} text="Новая активность!" />
      <p>Dolorem possimus repellendus iste fugit facilis veniam quidem velit eos itaque perferendis? Impedit rerum fugiat, delectus rem dicta temporibus exercitationem ad! Velit eum possimus reprehenderit, maiores assumenda placeat provident saepe?
      </p>
    </div>
  );
};

export default RandomActivity;
