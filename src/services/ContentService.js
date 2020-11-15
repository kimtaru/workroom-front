export default class HomeService {
  static getTodayTodoList(token) {
    //---서버 아직 없는 관계로 test object
    const dataList = [
      { todo: '미팅 어레인지', complete: 1 },
      { todo: '시안 컨펌', complete: 1 },
      { todo: '결산보고', complete: 1 },
      { todo: '회식장소예약', complete: 1 },
      { todo: '제안서 작성', complete: 0 },
      { todo: '업무 인수인계', complete: 0 },
      { todo: '지출결의', complete: 0 },
    ];
    //-------------------
    return dataList;
  }
}
