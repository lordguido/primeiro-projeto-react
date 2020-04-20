import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() {}

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25062007?s=460&u=31730c5330c320326193adb680154c5f908bf744&v=4"
            alt="Rodrigo Freitas"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25062007?s=460&u=31730c5330c320326193adb680154c5f908bf744&v=4"
            alt="Rodrigo Freitas"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25062007?s=460&u=31730c5330c320326193adb680154c5f908bf744&v=4"
            alt="Rodrigo Freitas"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
