import React, { useCallback } from 'react';
import {
  CarryOutOutlined,
  HomeOutlined,
  FormOutlined,
} from '@ant-design/icons';
import SiderMenuItem from '../components/SiderMenuItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeHome,
  activeReservation,
  activeTest,
} from '../redux/modules/sider';

export default function SiderMenuItemContainer({
  collapsed,
}) {
  const { home, reservation, test } = useSelector(
    (state) => state.sider,
  );
  const dispatch = useDispatch();

  const actHome = useCallback(() => {
    dispatch(activeHome());
  }, [dispatch]);

  const actReservation = useCallback(() => {
    dispatch(activeReservation());
  }, [dispatch]);

  const actTest = useCallback(() => {
    dispatch(activeTest());
  }, [dispatch]);

  return (
    <div>
      <SiderMenuItem
        collapsed={collapsed}
        title="Home"
        active={home}
        icon={<HomeOutlined style={{ fontSize: 25 }} />}
        clickEvent={actHome}
      />
      <SiderMenuItem
        collapsed={collapsed}
        title="Reservation"
        active={reservation}
        icon={<FormOutlined style={{ fontSize: 25 }} />}
        clickEvent={actReservation}
      />
      <SiderMenuItem
        collapsed={collapsed}
        title="Test"
        active={test}
        icon={<CarryOutOutlined style={{ fontSize: 25 }} />}
        clickEvent={actTest}
      />
    </div>
  );
}
