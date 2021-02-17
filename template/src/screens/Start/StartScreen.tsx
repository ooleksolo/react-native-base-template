import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import HelloApp from '../../components/HelloApp';

const StartScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.start);
  }, [dispatch]);

  return <HelloApp />;
};

export default StartScreen;
