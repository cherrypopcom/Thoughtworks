package org.nightschool.model;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class Cart {

    private final ArrayList<Disk> disks = new ArrayList<>();

    public List<Disk> getDisks() {
        return disks;
    }

    public void addDisk(Disk disk) {
        disks.add(disk);
    }

    public int countKinds() {
        HashSet<Disk> diskSet = new HashSet<>();

        for (Disk disk : disks) {
            diskSet.add(disk);
        }

        return diskSet.size();
    }

    public void removeDisk(Disk disk) {
        int count = 0;
        for (Disk d : disks) {
            if (d.equals(disk)) {
                count++;
            }
        }

        int i=0;
        while (i<count){
            disks.remove(disk);
            i++;
        }
    }

    public double countPrice(Disk disk) {
        int count=0;
        for(Disk d:disks){
            if(d.equals(disk)){
                count++;
            }
        }
        String[] name={"小清新光盘","婚庆光盘","1TB大容量光盘"};
        double[] price={3.5,5.0,10.0};
        int i;
        for(i=0;i<3;i++){
            if(disk.getName()==name[i])
                break;
        }
        double p=price[i];
        return count*p;
    }
}