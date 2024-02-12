import { nanoid } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { WriteTilDto } from './til.dto';
import { GetTilData, GetTilsData } from './til.response';

class TilAPI {
  private corePostsClient: AxiosInstance;

  constructor(corePostsClient: AxiosInstance) {
    this.corePostsClient = corePostsClient;
  }

  getTils = async () => {
    // axios 예시
    const url = '/posts';
    const response = await this.corePostsClient.get<GetTilsData>(url);
    const data = response.data;

    return data;

    // fetch 예시
    // const url =
    //   'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til';
    // const options = { method: 'GET' };

    // const response = await fetch(url, options);
    // const data = await response.json();

    // return data as Til[];
  };

  getTil = async (id: string) => {
    // axios
    const url = `/posts/${id}`;
    const response = await this.corePostsClient.get<GetTilData>(url);
    const data = response.data;

    return data;

    // fetch
    // const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // const options = { method: 'GET' };

    // const response = await fetch(url, options);
    // const data = await response.json();

    // return data as Til;
  };

  writeTil = async (dto: WriteTilDto) => {
    // axios
    const url =
      'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til';
    const { title, content } = dto;
    const newData = {
      id: nanoid(),
      title,
      content,
      author: {
        name: '이종환',
      },
    };
    const response = await this.corePostsClient.post<WriteTilDto>(
      url,
      // JSON.stringify(newData) // 이거 해야할지도..?
      newData
    );
    const data = response.data;
    return data;

    // fetch
    // const url =
    //   'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til';
    // const { title, content } = dto;
    // const newData = {
    //   id: nanoid(),
    //   title,
    //   content,
    //   author: {
    //     name: '이종환',
    //   },
    // };
    // const options = { method: 'POST', body: JSON.stringify(newData) };
    // const response = await fetch(url, options);
    // const til = await response.json();
    // return til;
  };
}

export default TilAPI;
