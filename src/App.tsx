import { Todos } from './components/Todos';
import { CreateTodoForm } from './components/forms';
import { AppLayout } from './components/layouts';

import './i18next';

const App = () => {
  return (
    <AppLayout>
      <CreateTodoForm />
      <Todos />
    </AppLayout>
  );
};

export default App;
