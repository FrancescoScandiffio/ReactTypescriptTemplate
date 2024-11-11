import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Projects = () => {
    const projects = [
        { id: 1, name: 'Project Alpha', status: 'Active' },
        { id: 2, name: 'Project Beta', status: 'Completed' },
        { id: 3, name: 'Project Gamma', status: 'Pending' }
    ];

    return (
        <div className="p-d-flex p-jc-center p-ai-center">
            <Card title="Projects" subTitle="Your project list" className="p-p-4">
                <DataTable value={projects}>
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </Card>
        </div>
    );
};

export default Projects;
