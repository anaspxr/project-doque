interface Member {
    id: number;
    img: string;
    name: string;
    email: string;
    role: string;
    online: boolean;
  }
  
  export const members: Member[] = [
    { id: 1, img: 'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain', name: 'John Doe', email: 'john@example.com', role: 'Admin', online: true },
    { id: 2, img: 'https://i.pinimg.com/originals/e8/a2/da/e8a2da73277b9d5792ab9db32b05e4bf.jpg', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', online: false },
    { id: 3, img: 'https://i.pinimg.com/enabled_hi/564x/a3/c5/94/a3c5941991524fc63d5d1657f696cbf0.jpg', name: 'Mike Johnson', email: 'mike@example.com', role: 'Viewer', online: true },
    { id: 4, img: 'https://i.pinimg.com/enabled_hi/564x/44/cf/8b/44cf8b5f7b7f6562b67784ef346aeca2.jpg', name: 'Emma Brown', email: 'emma@example.com', role: 'Admin', online: true },
    { id: 5, img: 'https://i.pinimg.com/236x/5d/2f/a3/5d2fa3122ac3f490e1005ad5d9cd4683.jpg', name: 'Sophia Green', email: 'sophia@example.com', role: 'Editor', online: false },
    { id: 6, img: 'https://i.pinimg.com/enabled_hi/564x/e5/75/17/e57517aab05bbf8f873c8c49df5cb17f.jpg', name: 'Lucas Gray', email: 'lucas@example.com', role: 'Viewer', online: true },
    { id: 7, img: 'https://i.pinimg.com/enabled_hi/564x/af/0c/cd/af0ccd5a4a34b4de1cf7f45b584d7c6f.jpg', name: 'Mia White', email: 'mia@example.com', role: 'Admin', online: false },
    { id: 8, img: 'https://i.pinimg.com/736x/8d/90/a7/8d90a738cdf967530dbb7747335e182d.jpg', name: 'Liam Black', email: 'liam@example.com', role: 'Editor', online: true },
    { id: 9, img: 'https://i.pinimg.com/enabled_hi/736x/d7/f2/be/d7f2bea7a60bd645243f2e84d10d488b.jpg', name: 'Oliver Blue', email: 'oliver@example.com', role: 'Viewer', online: false },
  ];
  
  export const teams: Omit<Member, 'role' | 'online'>[] = [
    { id: 1, name: 'Research and Development', email: 'dev@example.com', img:'https://th.bing.com/th/id/OIP.ZXgrLFD59L7w4JO4xjz2IgHaHa?w=800&h=800&rs=1&pid=ImgDetMain'},
    { id: 2, name: 'Research and Development', email: 'marketing@example.com' ,img:'https://th.bing.com/th/id/OIP.ZXgrLFD59L7w4JO4xjz2IgHaHa?w=800&h=800&rs=1&pid=ImgDetMain'},
    { id: 3, name: 'Research and Development', email: 'design@example.com' ,img:'https://th.bing.com/th/id/OIP.ZXgrLFD59L7w4JO4xjz2IgHaHa?w=800&h=800&rs=1&pid=ImgDetMain'},
    { id: 4, name: 'Research and Development', email: 'qa@example.com',img:'https://th.bing.com/th/id/OIP.ZXgrLFD59L7w4JO4xjz2IgHaHa?w=800&h=800&rs=1&pid=ImgDetMain' },
  ];
  
  