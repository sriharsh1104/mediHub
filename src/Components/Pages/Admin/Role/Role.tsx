import React, { useEffect, useState } from 'react';
import { fetchRole } from '../../../../Redux/Actions/user.action';
import { useSelector } from 'react-redux';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

interface Employee {
  id: number;
  displayName: string;
  reportingTo?: { name: string; id: number };
  roleId: number;
}

const Role: React.FC = () => {
  const [orgData, setOrgData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const organizationId = useSelector(
    (state: any) => state?.user?.companyData?.companyId
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchRole({ companyId: organizationId });

        if (result?.status === 200 && result?.data) {
          console.log('result123', result);
          setOrgData(result?.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [organizationId]);

  const renderTree = (nodes:any) => {
    console.log("dsajsdadsaasdsad", nodes);
    return (
      <TreeItem
        key={nodes.nodeId}
        nodeId={nodes.rolesInfo?.roleId}
        label={nodes.rolesInfo?.displayName}
      >
        {Array.isArray(nodes.children) ? nodes.children.map(renderTree) : null}
      </TreeItem>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ width: '100%', height: '500px' }}>
   <section className="user_details">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon="-"
        defaultExpandIcon="+"
      >
        {orgData?.map(renderTree)}
      </TreeView>
    </section>
  </div>
  );
};

export default Role;
