import { Children, useEffect, useState } from 'react';
import { forUser1, TasteUser1, getUserList } from '../util/api.js';
import Nav from '../Components/sharing/Nav';
import Footer from '../Components/sharing/Footer';
import styled from 'styled-components';
import HeaderWithInPut from '../Components/folderPage/HeaderWithInput';
import FolderPageMain from '../Components/folderPage/FolderPageMain.jsx';
import '../css/index.css';
import EditModal from '../Components/Modals/EditModal.jsx';
import AddFolderModal from '../Components/Modals/AddFolderModal.jsx';
import DeleteFoderModal from '../Components/Modals/DeleteFolderModal.jsx';
import DeleteLinkModal from '../Components/Modals/DeleteLinkModal.jsx';
import ShareModal from '../Components/Modals/ShareModal.jsx';
import AddModal from '../Components/Modals/AddModal.jsx';

const ForFolderNav = styled(Nav)`
  position: static;
`;

export default function FolderPage() {
  const [userData, setUSerData] = useState(null);
  const [buttons, setButtons] = useState();
  const [cardData, setCardData] = useState();
  const [isModal, setIsModal] = useState(null);
  const [littleTitle, setLittleTite] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [isKebab, setIsKebab] = useState(null);

  const handleModal = (id) => {
    console.log(id);
    setIsModal(id);

    if (isModal === id) {
      setIsModal(null);
    }
  };

  const handleSelet = (id) => {
    setIsSelected(id);

    if (isSelected === id) {
      setIsSelected(null);
    }
  };

  const handleKebab = (id) => {
    setIsKebab(id);

    if (isKebab === id) {
      setIsKebab(null);
    }
  };

  const myUser = async () => {
    const { data } = await forUser1();
    const [user] = data.map((li) => (li ? li : ''));

    const { email, image_source: profileImageSource } = user;

    setUSerData({ ...userData, email, profileImageSource });
  };

  const getUserTasteButton = async () => {
    const { data } = await TasteUser1();

    return setButtons(data);
  };

  const handleShowAll = async () => {
    const { data } = await getUserList();
    setCardData(data);
    setLittleTite(null);
  };

  const yourPick = async (id, name) => {
    const { data } = await getUserList(id);

    const filteredCards = data.filter(({ folder_id }) => folder_id === id);

    setLittleTite(name);

    setCardData(filteredCards);
  };

  useEffect(() => {
    myUser();
    getUserTasteButton();
    handleShowAll();
    yourPick();
  }, []);

  return (
    <>
      <ForFolderNav userData={userData} />
      <HeaderWithInPut />
      <FolderPageMain
        handleModal={handleModal}
        isModal={isModal}
        buttons={buttons}
        cardData={cardData}
        handleShowAll={handleShowAll}
        yourPick={yourPick}
        littleTitle={littleTitle}
        handleSelet={handleSelet}
        isSelected={isSelected}
        handleKebab={handleKebab}
        isKebab={isKebab}
      />
      <Footer />
    </>
  );
}
