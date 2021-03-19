public class Solution
{
    public IList<double> AverageOfLevels(TreeNode root)
    {
        List<double> allAvgs = new List<double>();
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        var temp = new Queue<TreeNode>();
        double runningAvg = 0;
        int nodeCount = 0;
        while (queue.Count != 0)
        {
            TreeNode upNext = queue.Dequeue();
            nodeCount += 1;
            runningAvg += upNext.val;
            if (upNext.left != null) temp.Enqueue(upNext.left);
            if (upNext.right != null) temp.Enqueue(upNext.right);
            if (queue.Count == 0)
            {
                queue = temp;
                temp = new Queue<TreeNode>();
                allAvgs.Add(runningAvg / nodeCount);
                nodeCount = 0;
                runningAvg = 0;
            }
        }
        double[] returnArray = allAvgs.ToArray();
        return returnArray;
    }
}