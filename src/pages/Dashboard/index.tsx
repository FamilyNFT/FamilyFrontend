import { useState } from "react";

import Layout from "components/Layout";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Card from "components/Card";
import Modal from "components/Modal";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [isDrag, setIsDrag] = useState(false);

  const handleClick = () => {
    if (isDrag) return;
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const items = [
    <Card handleClick={handleClick} key={1}>
      <video
        src="https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4"
        role="presentation"
        autoPlay={true}
      />
    </Card>,
    <Card handleClick={handleClick} key={2}>
      <video
        src="https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4"
        role="presentation"
        autoPlay={true}
      />
    </Card>,
    <Card handleClick={handleClick} key={3}>
      <video
        src="https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4"
        role="presentation"
        autoPlay={true}
      />
    </Card>,
  ];

  return (
    <div>
      <Layout>
        <div className="mt-3">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
              0: {
                items: 1,
              },
              1024: {
                items: 2,
              },
            }}
          />
        </div>
        <Modal __isOpen={modalOpen} dispatchModal={closeModal} />
      </Layout>
    </div>
  );
};

export default Dashboard;
